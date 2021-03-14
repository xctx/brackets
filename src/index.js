module.exports = function check(str, bracketsConfig) {

    let brackets = str.split('');
    let config = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        config.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    }

    for (let i = 0; i < brackets.length; i++) {
        for (let j = 0; j < config.length; j++) {
            if ((brackets[i - 1] + brackets[i]) == config[j]) {
                brackets.splice(i - 1, 2);
                i = i - 2;
                break;
            }
        }
    }

    return (brackets.length == 0);
}