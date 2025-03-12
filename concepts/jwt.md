jwt consists of 3 sections header payload and signature. they are base 64 encoded header and payload can be decrypted by anyone as the are not encrypted but only signature cannot be decrypted unless you shared public key even then it can be verified only by you simlar to how you verify passwords if you use hashing

The Signature is created using a secret key (HMAC) or a private key (RSA/ECDSA).
If asymmetric encryption (RSA/ECDSA) is used, the signature can be verified using the public key, but only the owner of the private key can generate it.
This is similar to how password hashing works—you can verify a password hash but not reverse it.

The signature is generaayed by you using tge header paylooad and your secret key using commonly used encryption algorithms like above

Session based jwt can be used to verify if it is latesst jwt ie latest login which prevents user being simultaneously logged in from mmultiple places. block username annd password sharing among users.
