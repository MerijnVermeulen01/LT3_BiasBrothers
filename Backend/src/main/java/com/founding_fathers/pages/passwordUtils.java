package com.founding_fathers.pages;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;

public class passwordUtils {
    private static final int SALT_LENGTH = 16; // Length of salt in bytes
    private static final String PEPPER = "mysecretpepper"; // Your secret pepper
    private static final int HASH_ITERATIONS = 10000; // Number of hash iterations

    public static String generateSalt() {
        SecureRandom random = new SecureRandom();
        byte[] salt = new byte[SALT_LENGTH];
        random.nextBytes(salt);
        return Base64.getEncoder().encodeToString(salt);
    }

    public static String hashPassword(String password, String salt) {
        String pepperedPassword = password + PEPPER;
        byte[] saltBytes = Base64.getDecoder().decode(salt);
        byte[] pepperedPasswordBytes = pepperedPassword.getBytes();
        byte[] hashBytes = null;

        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            digest.reset();
            digest.update(saltBytes);
            for (int i = 0; i < HASH_ITERATIONS; i++) {
                hashBytes = digest.digest(pepperedPasswordBytes);
                digest.reset();
                digest.update(hashBytes);
                digest.update(saltBytes);
            }
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        return Base64.getEncoder().encodeToString(hashBytes);
    }

    public static String Test() {

        return "";
    }

}
