import Head from "next/head";

const Meta = (props: any) => {
	return (
		<head>
			<meta charSet="UTF-8" key="charset" />
			<title>{props?.meta?.title}</title>
			<meta
				name="viewport"
				content="width=device-width,initial-scale=1"
				key="viewport"
			/>
			<meta
				name="facebook-domain-verification"
				content="clksuf1xg6711ghg99m26gendyfce4"
			/>
			<meta name="title" content={props.meta.title} />
			<meta name="description" content={props.meta.description} />
			<meta
				property="og:image"
				content={
					props?.meta?.image ||
					"https://thumbs.dreamstime.com/b/ilustraci%C3%B3n-de-espacio-profundo-y-logotipo-espacial-sobre-%C3%A9l-vectorial-del-planeta-195641418.jpg"
				}
			/>
			<meta property="og:title" content={props.meta.title} />
			<meta property="og:description" content={props.meta.description} />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, viewport-fit=cover"
			/>
			<meta property="og:type" content="website" />
			<meta
				property="og:url"
				content={props?.meta?.link || "https://swap.com.bd/"}
			/>
			<meta property="og:site_name" content="Swap" />
			<meta property="og:locale" content="en_US" />
			{props.children}
		</head>
	);
};

export default Meta;
