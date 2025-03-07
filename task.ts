// soution 1
type numberOrStringType = number | string;
function tsTestFunction(param: numberOrStringType): numberOrStringType {
  if (typeof param === "string") return param.length;
  else return param * param;
}

// soution 2
