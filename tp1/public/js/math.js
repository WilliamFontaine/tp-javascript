function increment() {
    for (let i = 0; i < 5; i++) {
        logMessage(i);
        switch (i) {
            case 0:
                logMessage(VERT);
                break;
            case (i % 2) === 0:
                logMessage(ROUGE);
                break;
            default:
                logMessage(BLEU);
                break;
        }
    }
}