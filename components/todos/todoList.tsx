import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
	View,
	Text,
	Button,
	FlatList,
	StyleSheet,
	TouchableOpacity,
} from "react-native";

const todos = [
	{ id: "1", text: "Learn React Native" },
	{ id: "2", text: "Work on Todo App" },
	{ id: "3", text: "Fix bugs" },
];

export default function TodoList() {
	const renderItem = ({ item }) => (
		<View style={styles.item}>
			<Text>{item.text}</Text>
			<View style={styles.actions}>
				<TouchableOpacity onPress={() => console.log("Edit", item.id)}>
					<FontAwesome name="edit" size={24} color="black" />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => console.log("Delete", item.id)}
				>
					<FontAwesome name="trash" size={24} color="black" />
				</TouchableOpacity>
			</View>
		</View>
	);

	return (
		<FlatList
			data={todos}
			renderItem={renderItem}
			keyExtractor={(item) => item.id}
		/>
	);
}

const styles = StyleSheet.create({
	item: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
	},
	actions: {
		flexDirection: "row",
	},
});
