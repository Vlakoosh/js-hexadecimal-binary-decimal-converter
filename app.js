const inputField = document.querySelector('#inputField');
const outputField = document.querySelector('#outputField');
const convertButton = document.querySelector('#convertButton');

function convert() {
    const initialValue = inputField.value;
    const button = document.querySelector('input:checked');
    if (button.id === "hexadecimal") {
        convertHexadecimalToDecimal(initialValue)
    }
    else if (button.id === "octal") {
        convertOctalToDecimal(initialValue)
    }
    else if (button.id === "binary") {
        convertBinaryToDecimal(initialValue)
    }

}

function convertHexadecimalToDecimal(hexInput) {
    let decimal = 0;
    let digit = 0;

    hexInput = hexInput.trim();

    if (hexInput.substring(0,2) === "0x"){
        hexInput = hexInput.substring(2);
    }

    const hexNumberArray = hexInput.split('');
    hexNumberArray.toReversed().forEach(bit => {
        switch (bit.toUpperCase()) {
            case 'A':
                bit = 10;
                break;
            case 'B':
                bit = 11;
                break;
            case 'C':
                bit = 12;
                break;
            case 'D':
                bit = 13;
                break;
            case 'E':
                bit = 14;
                break;
            case 'F':
                bit = 15;
                break;
            default:
                bit = parseInt(bit);
        }
        decimal = decimal + (bit * Math.pow(16, digit));
        digit++;
    });
    outputField.value = decimal;
}

function convertOctalToDecimal(octalInput) {
    let decimal = 0;
    let digit = 0;

    octalInput = octalInput.trim();
    const octalNumberArray = octalInput.split('');
    octalNumberArray.toReversed().forEach(bit => {
        bit = parseInt(bit);
        decimal = decimal + (bit * Math.pow(8, digit));
        digit++;
    });
    outputField.value = decimal;
}

function convertBinaryToDecimal(binaryInput) {

    let decimal = 0;
    let digit = 0;

    binaryInput = binaryInput.trim();
    if (binaryInput.substring(0,2) === "0b"){
        binaryInput = binaryInput.substring(2);
    }
    const binaryNumberArray = binaryInput.split('');

    binaryNumberArray.toReversed().forEach(bit => {
        bit = parseInt(bit);
        decimal = decimal + (bit * Math.pow(2, digit));
        digit++;
    });
    outputField.value = decimal;
}

