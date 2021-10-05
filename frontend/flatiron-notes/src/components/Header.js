import React from "react";
import { Link } from "react-router-dom";
import { Divider, Image } from "semantic-ui-react";

function Header() {
	return (
		<div>
			<Link to="/">
				{/* <img
					className="application-logo"
					src={
						"https://images-ext-2.discordapp.net/external/qZ_hvFg9jVtTxPaOITD2saf2EuXrnxCN_wx_Fnfgb70/https/upload.wikimedia.org/wikipedia/commons/6/61/FS_wiki.png"
					}
					alt={"flatiron-logo"}
				></img> */}
				<Image
					src={
						"https://images-ext-2.discordapp.net/external/qZ_hvFg9jVtTxPaOITD2saf2EuXrnxCN_wx_Fnfgb70/https/upload.wikimedia.org/wikipedia/commons/6/61/FS_wiki.png"
					}
					size="medium"
				/>
			</Link>
		</div>
	);
}

export default Header;
