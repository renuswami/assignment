package assignment.java.array;

import java.util.Arrays;

public class RearrangeArray {

    public static void rearrangeArray(int[] arr) {
        Arrays.sort(arr);
        int[] result = new int[arr.length];
        int index = 0;
        for (int i = 0; i < arr.length; i += 2) {
            result[i] = arr[index++];
        }
        for (int i = 1; i < arr.length; i += 2) {
            result[i] = arr[index++];
        }
        System.arraycopy(result, 0, arr, 0, arr.length);
    }
}
