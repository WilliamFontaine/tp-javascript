function increment() {
    for (let i = 0; i < 5; i++) {
        if (i === 0)
            logMessage(i + ": " + VERT);
        else if (i % 2 === 0)
            logMessage(i + ": " + ROUGE);
        else
            logMessage(i + ": " + BLEU);
    }
}