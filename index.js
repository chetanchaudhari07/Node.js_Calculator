const {sum,sub,pro,div} = require("./data.js")


const args = process.argv.slice(2);
const operation = args[0];
const numbers = args.slice(1).map(Number);
const crypto = require('crypto');



if (numbers.some(isNaN)) {
    console.log('Invalid number input');
    return;
  }





let result ;

try {
    switch(operation){
        case 'add':
            if (numbers.length !==2){
                console.log("provide two number for addition")
                return;
            }
    
            result = sum(numbers[0],numbers[1]);
            break;
        
            case 'sub':
                if (numbers.length !==2){
                    console.log("provide two number for subtraction")
                    return;
                }
        
                result = sub(numbers[0],numbers[1]);
                break;    
        
                case 'mult':
                    if (numbers.length !==2){
                        console.log("provide two number for multi")
                        return;
                    }
            
                    result = pro(numbers[0],numbers[1]);
                    break;        
    
                    case 'divide':
                        if (numbers.length !==2){
                            console.log("provide two number for divide ")
                            return;
                        }
                
                        result = div(numbers[0],numbers[1]);
                        break;
    
    
                        case 'sin':
                            if (numbers.length !== 1) {
                                console.log('provide number for sine calculation.');
                                return;
                            }
                            result = Math.sin(numbers[0]);
                            break;
                        case 'cos':
                            if (numbers.length !== 1) {
                                console.log('Please provide number for cosine calculation.');
                                return;
                            }
                            result = Math.cos(numbers[0]);
                            break;
                        case 'tan':
                            if (numbers.length !== 1) {
                                console.log('provide number for tangent calculation.');
                                return;
                            }
                            result = Math.tan(numbers[0]);
                            break;
                        case 'random':
                            const length = Number(args[1]);
                            if (!length) {
                                console.log('Provide length for random number generation.');
                            } else {
                                result = randomBytes(length).toString('hex');
                            }
                            break;
                        default:
                            console.log('Invalid operation');
                            return;
                    }
                
                    if (result !== undefined) {
                        console.log(`Result: ${result}`);
                    }                
    
    
    
    
    
} catch (error) {
    console.log(error)
}












