var twist;
var cmdVel;
var publishImmidiately = true;
var robot_IP;
var manager;
var teleop;
var ros;
var mode = false;

function move(linear, angular) {
    if (linear !== undefined && angular !== undefined) {
        twist.linear.x = linear;
        twist.angular.z = angular;
    } else {
        twist.linear.x = 0;
        twist.angular.z = 0;
    }
    cmdVel.publish(twist);
}

function initVelocityPublisher() {
    // Init message with zero values.
    twist = new ROSLIB.Message({
        linear: {
            x: 0,
            y: 0,
            z: 0
        },
        angular: {
            x: 0,
            y: 0,
            z: 0
        }
    });
    // Init topic object
    cmdVel = new ROSLIB.Topic({
        ros: ros,
        name: '/cmd_vel',
        messageType: 'geometry_msgs/Twist'
    });
    // Register publisher within ROS system
    cmdVel.advertise();
}

function initTeleopKeyboard() {
    // Use w, s, a, d keys to drive your robot

    // Check if keyboard controller was aready created
    if (teleop == null) {
        // Initialize the teleop.
        teleop = new KEYBOARDTELEOP.Teleop({
            ros: ros,
            topic: '/cmd_vel'
        });
    }

    // Add event listener for slider moves
    robotSpeedRange = document.getElementById("robot-speed");
    robotSpeedRange.oninput = function () {
        teleop.scale = robotSpeedRange.value / 100
    }
}

function createJoystick() {
    // Check if joystick was aready created
    if (manager == null) {
        joystickContainer = document.getElementById('joystick');
        // joystck configuration, if you want to adjust joystick, refer to:
        // https://yoannmoinet.github.io/nipplejs/
        var options = {
            zone: joystickContainer,
            position: { left: 50 + '%' },
            mode: 'static',
            size: 200,
            color: '#0066ff',
            restJoystick: true
        };
        manager = nipplejs.create(options);
        // event listener for joystick move

        linear_speed = 0;
        angular_speed = 0;

        manager.on('start', function (event, nipple) {
            timer = setInterval(function () {
              move(linear_speed, angular_speed);
            }, 25);
          });
        manager.on('move', function (evt, nipple) {
            max_linear = 0.7; // m/s
            max_angular = 0.9; // rad/s
            max_distance = 75.0; // pixels;
            linear_speed = Math.sin(nipple.angle.radian) * max_linear * nipple.distance/max_distance;
            angular_speed = -Math.cos(nipple.angle.radian) * max_angular * nipple.distance/max_distance;
        });
        // event litener for joystick release, always send stop message
        manager.on('end', function () {
            if (timer) {
                clearInterval(timer);
            }
            self.move(0, 0);

        });
    }
}

function initTeloModeService(){

    var telo_change_mode = new ROSLIB.Service({
        ros : ros,
        name : '/telo_change_mode',
        serviceType : 'std_srvs/SetBool'
    });
    console.log("initTeloModeService");

    button_mode = document.getElementById('robot-mode');
    button_mode.onclick = function(){
        var request = new ROSLIB.ServiceRequest({
            data: !mode
        });
        video = document.getElementById('video');
        video.src = mode ? "http://"+robot_IP+":8080/stream?topic=/usb_cam/image_raw" : "http://" + robot_IP + ":8080/stream?topic=/usb_cam/cv_image";
        telo_change_mode.callService(request, function(result) {
            mode = ! mode;
            button_mode.innerHTML = result.message;

        });
        console.log("createButtonMode & all change_telo_mode service");
        console.log("mode.toString()")
    }
}

window.onload = function () {
    // determine robot address automatically
    // robot_IP = location.hostname;
    // set robot address statically
    robot_IP = "telo-robot.local";

    // // Init handle for rosbridge_websocket
    ros = new ROSLIB.Ros({
        url: "ws://"+robot_IP+":9090"
    });


    initTeloModeService();
    video = document.getElementById('video');
    // Populate video source
    video.src = "http://" + robot_IP + ":8080/stream?topic=/usb_cam/image_raw";
    // http://telo-robot.local:8080/stream?topic=/usb_cam/image_raw
    video.onload = function () {
        // joystick and keyboard controls will be available only when video is correctly loaded
        initVelocityPublisher();
        createJoystick();
        initTeleopKeyboard();
    };
}
