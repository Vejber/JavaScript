function recurce(n) {
    if (n >= 0) {
        console.log(n);
        recurce(n - 1);
    }
    return;
}

recurce(10);