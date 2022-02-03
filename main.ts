// Declaring variables and functions
let stepCount: number = 0;
let stepGoal = 10;

function onStepCount(count : number, code: () => void) {
    basic.forever(function() {
        if (stepCount == count) {
            code();
        }
    });
}

basic.forever(function() {
    if (stepCount == stepGoal) {
        basic.showString(`You have taken ${stepCount} steps!`);
    }
    else if (stepCount < stepGoal) {
        basic.showString(`Great job! You still need ${stepGoal - stepCount} to complete your goal!`);
    }
    else {
        basic.showString(``);
    }
});

input.onGesture(Gesture.Shake, function() {
    stepCount++;
});


onStepCount(stepGoal, function() {
    basic.showString(`You took ${stepCount} steps!`);
})
