import React from "react";
import {Button, ButtonGroup } from "react-bootstrap";
import "./style.css";



import styled, { keyframes } from "styled-components";
import { css } from "aphrodite";
import {styles} from "./SecondSection"


export default function FinalSection() {
	return (
		<>
	
	
			
			<div className={css(styles.displayRight)}>

				<img src={process.env.PUBLIC_URL+"/assets/Airdrop/dddd.png"} className={css(styles.image)} alt="six" />
				<div>
				<ButtonGroup className={css(styles.button_group)}>
								<Button
									style={{
										borderRadius: "15px",

										border: "2px solid white",
									}}
								>
									<img
										src={process.env.PUBLIC_URL+"/assets/Airdrop/telegram.png"}
										width={20}
										className="mx-1"
										alt="seventh"
									/>
									Follow Group
								</Button>
								<button className="pendingButton" ></button>
							</ButtonGroup>
					</div>
				</div>
					
						
					
					
				
				
				<center>
					<img src={process.env.PUBLIC_URL+"/assets/Airdrop/claim-reward.png"}  alt="yes" className={css(styles.image_mid)} />
				</center>
				
				<hr style={{ border: "2px solid black",margin:"0px" }} />
	
		</>
	);
}