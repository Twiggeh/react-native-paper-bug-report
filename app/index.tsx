import { Link } from "expo-router";
import { List, Text } from "react-native-paper";

export default function () {
	// TODO : comment this line and you will see that title is only rendered when its not wrapped in a Link
	return <List.Item title="hello there"></List.Item>;

	return (
		<Link href={"/other"}>
			<List.Item title="hello there"></List.Item>
		</Link>
	);
}
