import { add } from "@/features/todo/todoSlice";
import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Keyboard } from "react-native";
import { useDispatch } from "react-redux";

export default function TodoInput() {
	const dispatch = useDispatch();

	const [input, setInput] = useState("");

	const handleAddTodo = () => {
		if (input) {
			dispatch(add({ id: Math.random().toString(), text: input }));
			setInput("");
			Keyboard.dismiss();
		}
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
