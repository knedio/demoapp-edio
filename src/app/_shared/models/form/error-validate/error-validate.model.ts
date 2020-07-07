export class ErrorValidate {
	required?: Boolean;
	pattern?: {
		requiredPattern?: string
	};
	minlength?: {
		actualLength: number,
		requiredLength: number,
	};
}