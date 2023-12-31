package com.ssafy.dingdong.global.response;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ResponseStatus {
    /* 공통 */
    RESPONSE_SUCCESS(ResponseStatusCode.SUCCESS, "요청에 성공했습니다."),
    SESSION_CREATED(ResponseStatusCode.SUCCESS, "접속되었습니다."),
    SESSION_DELETED(ResponseStatusCode.SUCCESS, "접속 종료하였습니다."),
    NICKNAME_IS_UNIQUE(ResponseStatusCode.SUCCESS, "사용 가능한 닉네임입니다."),
    NICKNAME_IS_DUPLICATED(ResponseStatusCode.FAILED, "이미 존재하는 닉네임입니다.");

    private final ResponseStatusCode code;
    private final String message;
}
