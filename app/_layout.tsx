import * as React from "react";
import { AppRegistry } from "react-native";
import { PaperProvider } from "react-native-paper";
import { name as appName } from "../app.json";
import { Stack } from "expo-router";

export default function Main() {
	return (
		<PaperProvider>
			<Stack />
		</PaperProvider>
	);
}

AppRegistry.registerComponent(appName, () => Main);
