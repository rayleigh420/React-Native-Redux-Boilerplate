import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

export default function TodoInput() {
	const [input, setInput] = useState("");

	const handleAddTodo = () => {
		// Handle the addition of the todo
	};

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.input}
				placeholder="Add a todo..."
				value={input}
				onChangeText={setInput}
			/>
			<Button title="Add" onPress={handleAddTodo} />
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		position: "absolute",
		bottom: 0,
		width: "100%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
		borderTopWidth: 1,
		borderTopColor: "#ddd",
		padding: 10,
	},
	input: {
		flex: 1,
		height: 40,
		borderColor: "#ddd",
		borderWidth: 1,
		borderRadius: 4,
		marginRight: 10,
		paddingLeft: 10,
	},
});
