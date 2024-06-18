const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordStrengthRegex = /^.{6,}$/;
const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
const twoDecimalNumberRegex = /^[0-9]+(\.[0-9]{1,2})?$/;
const optionalKeys = ["image", "description"]

export function validateProductInput(obj)
// returs if and what key is invalid and a message about it
{
    for (let key in obj) {
        if ((obj.hasOwnProperty(key) && !optionalKeys.includes(key)) && obj[key] == '')
        {
          return [true, key, "Please enter field: " + key];
        }
        else if (key == 'price' && !twoDecimalNumberRegex.test(obj[key]))
        {
            return [true, key, "That not a valid price"]
        }
      }
    return [false, null, ""];
}