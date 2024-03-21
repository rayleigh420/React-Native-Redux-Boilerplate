import { todo } from "@/types/todo";
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
import TodoItem from "./todoItem";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function TodoList() {
	const todos = useSelector((state: RootState) => state.counter.todos);
	const renderItem = ({ item }: { item: todo }) => <TodoItem item={item} />;

	return (
		<FlatList<todo>
			data={todos}
			renderItem={renderItem}
			keyExtractor={(item) => item.id}
		/>
	);
}
