package com.geass.user.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class PasswordUtil {

    /** 对密码进行 SHA-256 哈希 */
    public static String hashPassword(String password) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hashed = md.digest(password.getBytes());
            return bytesToHex(hashed);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Hash 算法不可用", e);
        }
    }

    /** 验证密码 */
    public static boolean verifyPassword(String rawPassword, String storedHash) {
        String hash = hashPassword(rawPassword);
        return hash.equals(storedHash);
    }

    /** byte[] 转 16进制字符串 */
    private static String bytesToHex(byte[] bytes) {
        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) {
            sb.append(String.format("%02x", b));
        }
        return sb.toString();
    }
}
