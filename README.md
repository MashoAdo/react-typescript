# Topics

1. Basic Types - string,number,boolean,array,optional types
2. Advanced Types - ReactDomNode, ChangeEvent,MouseEvent,CssProperties,Union Types

## Concepts

1. Reusing types
   -Create Atomic types and reuse in complex type definitions
   -Type Inference
   -Type Assertion

2. Discriminated Unions

   - Two similar types,one having a property the other doesn't and eventually passing these types to another type as a union

     E.g type A ={name:string,age:number}
     type B = {name:string}
     type C = A | B
