type IdentityProps = "id";

type CapitalizedIdentityProps = Capitalize<IdentityProps>;
const p1: CapitalizedIdentityProps = "Id";

type UpperCaseIdentityProps = Uppercase<IdentityProps>;
const p2: UpperCaseIdentityProps = "ID";
