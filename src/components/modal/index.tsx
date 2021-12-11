
import React, { Children } from "react";
import styled from "styled-components";


const ModalContainer = styled.div<any>`
  position: relative;
  z-index: 1; 
  padding-top: 30%; 
  width: 100%; 
  height: 100%; 
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  display: ${(props: any) => props.display};
`;

const ModalContent= styled.div`
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 50%;
    height: 50%;
  `;

  const ModalHeader = styled.div`
    padding: 2px 16px;
    color: white;
    background-color: #5cb85c;
  `;
  
  const ModalBody = styled.div`
    padding: 2px 16px;
    text-align: center;
    padding-top: 20px; 
    height: 100%;
    background-color: white;
  `;
  

export const ModalDialog: React.FC<{show: boolean, header: string}> = ({show,header, children}) => {
    const showHideClassName = show ? "block" : "none";
    return(
        <ModalContainer display = {showHideClassName}>
            <ModalContent>
                <ModalHeader>
                   <h1>{header}</h1>
                </ModalHeader>

                <ModalBody>
                   {children}
                </ModalBody>

            </ModalContent> 
        </ModalContainer>
    )

}