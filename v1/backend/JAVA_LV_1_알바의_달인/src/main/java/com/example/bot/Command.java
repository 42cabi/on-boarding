package com.example.bot;

import java.util.Arrays;

public enum Command {
    NONE("", OrderType.CALCULATE),
    DELIMITER_TYPE1("랑", OrderType.CALCULATE),
    DELIMITER_TYPE2("이랑", OrderType.CALCULATE),
    REMOVE_ORDER("빼", OrderType.REMOVE),
    FIND_PRODUCT("시켰나?", OrderType.FIND),
    COUNT_PRODUCT("몇 개야?", OrderType.COUNT),
    RESULT("얼마야?", OrderType.RESULT);

    private final String command;
    private final OrderType type;

    Command(String command, OrderType type) {
        this.command = command;
        this.type = type;
    }

    public static Command from(String cmd) {
        return Arrays.stream(values())
                .filter(command -> command.getCommand().equals(cmd))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("해당 커맨드는 학습하지 않았습니다. 데스크에 문의하시던지.."));
    }

    public String getCommand() {
        return command;
    }

    public OrderType getType() {
        return type;
    }
}
