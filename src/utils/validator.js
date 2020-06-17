export default function validate(field, length) {
    if (field != null && field.length < length) {
        return false;
    }
}