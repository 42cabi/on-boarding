package com.example.maddaewoole;

public class Main {

    public static void main(String[] args) {
        Jpark2 jpark2 = new Jpark2();
        Daewoole daewoole = new Daewoole(jpark2.getMentions());

        int count = 0;
        while (daewoole.isOverLimit()) {
            String provokeMention = jpark2.provoke();
            int learnedAngerPoint = daewoole.getLearnedAngerPoint(provokeMention);

            printProvokeMention(provokeMention, learnedAngerPoint);
            // 외부에서 property를 직접 수정하는 것보단.. 중복이 나을듯
            daewoole.provoked(provokeMention);
            printAngerPoint(daewoole.getAnger());
            count++;
        }
        printPunchCount(count);
    }

    private static void printProvokeMention(String mention, int angerPoint) {
        System.out.println("지원은 '" + mention + "'를 시전하여 대욱의 본노를 " + angerPoint + " 증가시켰다.");
    }

    private static void printAngerPoint(int angerPoint) {
        System.out.println("현재 대욱의 분노 수치: " + angerPoint);
    }

    private static void printPunchCount(int count) {
        System.out.println("참지 못한 대욱은 결국 지원에게 잼민 펀치를 날렸다.");
        System.out.println("대욱을 도발한 횟수 : " + count + "회");
    }
}
