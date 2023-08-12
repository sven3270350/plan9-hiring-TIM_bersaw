/**
 * closure is a function to test typescript knowldge
 * @param {string} name 
 * @param {string} lastname 
 * @param {function }callback 
 * @returns 
 */
export function closure(name, lastname, callback) {
	const result = {
		fullName: `${name} ${lastname}`,
		uppercase() {
			return name.toUpperCase()
		}
	}
	callback(result)
	return result
}