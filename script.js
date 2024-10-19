//your JS code here. If required.
document.getElementById("btn").addEventListener("click", () => {
    const inputValue = document.getElementById("ip").value;

    // Check if the input value is a valid number
    if (isNaN(inputValue) || inputValue.trim() === "") {
        document.getElementById("output").innerText = "Please enter a valid number.";
        return;
    }

    // Start promise chain
    Promise.resolve(Number(inputValue))
        .then((number) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    document.getElementById("output").innerText = `Result: ${number}`;
                    resolve(number);
                }, 2000);
            });
        })
        .then((number) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = number * 2;
                    document.getElementById("output").innerText = `Result: ${result}`;
                    resolve(result);
                }, 1000);
            });
        })
        .then((number) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = number - 3;
                    document.getElementById("output").innerText = `Result: ${result}`;
                    resolve(result);
                }, 1000);
            });
        })
        .then((number) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = number / 2;
                    document.getElementById("output").innerText = `Result: ${result}`;
                    resolve(result);
                }, 1000);
            });
        })
        .then((number) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = number + 10;
                    document.getElementById("output").innerText = `Result: ${result}`;
                    resolve(result);
                }, 1000);
            });
        })
        .then((number) => {
            document.getElementById("output").innerText = `Final Result: ${number}`;
        })
        .catch((error) => {
            document.getElementById("output").innerText = `Error: ${error}`;
        });
});
