using System;
using System.IO;
using System.Security.Cryptography;
using System.Text;

internal class Program
{
    static byte[] EncryptData(string plainText, RSAParameters rsaParameters)
    {
        byte[] plainTextArray = new
        UnicodeEncoding().GetBytes(plainText);
        RSACryptoServiceProvider RSA = new RSACryptoServiceProvider();
        RSA.ImportParameters(rsaParameters);
        byte[] encryptedData = RSA.Encrypt(plainTextArray, true);
        return encryptedData;
    }
    static byte[] DecryptData(byte[] encryptedData, RSAParameters rsaParameters)
    {
        RSACryptoServiceProvider RSA = new
        RSACryptoServiceProvider();
        RSA.ImportParameters(rsaParameters);
        byte[] decryptedData = RSA.Decrypt(encryptedData, true);
        return decryptedData;
    }
    static void Main(string[] args)
    {
        Console.WriteLine("Enter text to encrypt:");
        String inputText = Console.ReadLine();
        RSACryptoServiceProvider RSA = new RSACryptoServiceProvider();
        RSAParameters RSAParam = RSA.ExportParameters(false);
        byte[] encryptedData = EncryptData(inputText, RSAParam);
        string encryptedString = Encoding.Default.GetString(encryptedData);
        Console.WriteLine("\nEncrypted data \n{0}", encryptedString);
        byte[] decryptedData = DecryptData(encryptedData,RSA.ExportParameters(true));
        String decryptedString = new
        UnicodeEncoding().GetString(decryptedData);
        Console.WriteLine("\nDecrypted data \n{0}", decryptedString);
    }
}
