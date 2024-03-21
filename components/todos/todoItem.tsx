import { StyleSheet, TextInput } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { todo } from "@/types/todo";
import { useDispatch } from "react-redux";
import { remove, update } from "@/features/todo/todoSlice";

export default function TodoItem({ item }: { item: todo }) {
	const dispatch = useDispatch();
	const [edit, setEdit] = useState(false);
	const [editText, setEditText] = useState(item.text);
	const inputRef = useRef<TextInput>(null);

	const handleRemoveTodo = (id: string) => {
		dispatch(remove(id));
	};

	const handleUpdateTodo = () => {
		console.log('1')
		setEdit(true);
	};

	// const handleBlur = () => {
	// 	setEditText(item.text);
	// 	setEdit(false);
	// };

	const handleSubmitEdit = () => {
		console.log("Edit");
		if (editText) {
			console.log(editText);
			dispatch(update({ id: item.id, text: editText }));
			setEdit(false);
			// setEditText(item.text);
		}
	};

	useEffect(() => {
		if (edit && inputRef.current) {
			inputRef.current.focus();
		}
	}, [edit]);

	return (
		<View style={styles.item}>
			{edit ? (
				<TextInput
					defaultValue={item.text}
					ref={inputRef}
					value={editText}
					onChangeText={setEditText}
					// onBlur={handleBlur}
				/>
			) : (
				<Text>{item.text}</Text>
			)}
			<View style={styles.actions}>
				{edit ? (
					<TouchableOpacity onPress={() => handleSubmitEdit()}>
						<FontAwesome name="save" size={24} color="black" />
					</TouchableOpacity>
				) : (
					<TouchableOpacity onPress={() => handleUpdateTodo()}>
						<FontAwesome name="edit" size={24} color="black" />
					</TouchableOpacity>
				)}
				<TouchableOpacity onPress={() => handleRemoveTodo(item.id)}>
					<FontAwesome name="trash" size={24} color="black" />
				</TouchableOpacity>
			</View>
		</View>
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
		justifyContent: "space-between",
		alignItems: "center",
		minWidth: 50,
	},
});
