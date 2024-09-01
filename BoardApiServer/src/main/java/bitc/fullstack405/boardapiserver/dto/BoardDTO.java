package bitc.fullstack405.boardapiserver.dto;

import lombok.Data;

@Data
public class BoardDTO {
    private int boardIdx;
    private String title;
    private String content;
    private String createUser;
    private String createDate;
    private String updateUser;
    private String updateDate;
    private int hitCnt;
}
