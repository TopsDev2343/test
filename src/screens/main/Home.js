// BookScreen.js
import React, { useEffect } from 'react';
import { View, Text, FlatList, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '@/store/bookSlice';
import Layout from '@/containers/Auth';

const BookScreen = () => {
    const dispatch = useDispatch();
    const { books, page, limit, totalPages, loading, error } = useSelector(state => state.books);

    useEffect(() => {
        dispatch(fetchBooks({ page, limit }));
    }, [dispatch, page, limit]);

    const handleNextPage = () => {
        if (page < totalPages) {
            dispatch(fetchBooks({ page: page + 1, limit }));
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            dispatch(fetchBooks({ page: page - 1, limit }));
        }
    };

    return (
        <Layout>
            <Text style={styles.title}>Books</Text>
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            {error && <Text style={styles.error}>Error:</Text>}
            <FlatList
                data={books ?? []}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.bookItem}>
                        <Text style={styles.bookTitle}>{item.title}</Text>
                    </View>
                )}
            />
            <View style={styles.pagination}>
                <Button onPress={handlePrevPage} title="Previous" disabled={page === 1} />
                <Text style={styles.pageInfo}>Page {page} of {totalPages}</Text>
                <Button onPress={handleNextPage} title="Next" disabled={page === totalPages} />
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    bookItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    bookTitle: {
        fontSize: 18,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
    },
    pageInfo: {
        fontSize: 16,
    },
    error: {
        color: 'red',
        marginBottom: 16,
    },
});

export default BookScreen;
