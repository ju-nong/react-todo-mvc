import React from "react";
import styled from "styled-components";

const FooterStyled = styled.div`
    text-align: center;
    color: #bfbfbf;
    font-size: 10px;
    line-height: 2;
    margin-bottom: 20px;

    a {
        color: #bfbfbf;
    }
`;

function Footer() {
    return (
        <FooterStyled>
            <p>더블클릭해서 할 일을 수정하세요.</p>
            <p>만든이 이준용</p>
            <p>
                사실
                <a
                    href="https://todomvc.com/examples/react"
                    target="_blank"
                    style={{ marginLeft: 3, marginRight: 3 }}
                >
                    여기
                </a>
                클론코딩함
            </p>
        </FooterStyled>
    );
}

export { Footer };
