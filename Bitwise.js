/*Let's see how the binary operator works*/
/****************************************
********** OR-OPERATOR ******************
*****************************************/
/*
    Example 1   N0(1) = 00000001 
                N1(2) = 00000010 
                -----------------
    OR-Result         = 00000011
                -----------------
*/

//console.log(1 | 2); // It will genrate 3 as output

/*
    Example 2   N0(5) = 00000101 
                N1(9) = 00001001 
                -----------------
    OR-Result         = 00001101
                -----------------
*/

// console.log(5 | 9); // It will generate 14 as output

/****************************************
********** AND-OPERATOR *****************
*****************************************/
/*
    Example 1   N0(1) = 00000001 
                N1(3) = 00000011 
                -----------------
    AND-Result        = 00000001
                -----------------
*/

// console.log(1 & 3); // It will generate 3 as output 

/*
    Example 1   N0(14)= 00001110 
                N1(9) = 00001001 
                -----------------
    AND-Result        = 00001000
                -----------------
*/

// console.log(14 & 9); // It will generate 8 as output

/*  Realtime use of Bitwise operator 
    Example: Suppose we have some permissions
    Read, Write and Delete and we want to allocate it 
    to some user and the same time we also have to validate 
    the permissions,
    Read = 00000100
    Write = 00000010
    Delete= 00000001
*/
const readPermission = 4;
const writePermission = 2;
const deletePermission = 1 ;
let userPermission = 0;
let message = "";
userPermission = userPermission | readPermission | writePermission | deletePermission;
message = (userPermission & readPermission) ? "Yes user have read permission"  : "No user do not have read permission"; 
message = (userPermission & writePermission) ? "Yes user have write permission"  : "No user do not have write permission"; 
message = (userPermission & deletePermission) ? "Yes user have delete permission"  : "No user do not have delete permission"; 
console.log(message);


/****************************************
********** XOR-OPERATOR *****************
*****************************************/
/*When a bitwise XOR is performed on a pair of bits,
 it returns 1 if the bits are different */
/*
    Example 1   N0(15)= 00001111 
                N1(9) = 00001001 
                -----------------
    XOR-Result        = 00000110
*/
//console.log(7^2); // It will generate 15 as output;
/*
    Example 1   N0(8) = 00001000 
                N1(4) = 00000100 
                -----------------
    XOR-Result        = 00001100
*/
//console.log(8^4);