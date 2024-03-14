import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function TabOneScreen() {
	const count = useSelector((state: RootState) => state.counter.value);

	return (
		// <View style={styles.container}>
		//   <Text style={styles.title}>Tab One</Text>
		//   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
		//   <EditScreenInfo path="app/(tabs)/index.tsx" />
		// </View>
		<Text>{count}</Text>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
