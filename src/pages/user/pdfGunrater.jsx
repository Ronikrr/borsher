
import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

const MyPDF = () => {
    const styles = StyleSheet.create({
        body: {
            fontFamily: 'Arial',
            padding: 20,
            backgroundColor: '#f9f9f9',
        },
        container: {
            width: '100%',
            margin: '0 auto',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            padding: 20,
        },
        header: {
            textAlign: 'center',
            marginBottom: 20,
        },
        product: {
            flexDirection: 'row',
            marginBottom: 20,
        },
        productImage: {
            width: 500,
            height: 350,
            border: '1px solid #ccc',
        },
        details: {
            marginLeft: 20,
            flex: 1,
        },
        footer: {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 20,
            paddingTop: 10,
            borderTop: '1px solid #ccc',
        },
    });


    return (
        <Document>
            <Page size="A4" style={styles.body}>
                <View style={styles.container}>
                    {/* Header Section */}
                    <View style={styles.header}>
                        <Image src="logo-placeholder.png" style={styles.headerImage} />
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Lab Treasure</Text>
                    </View>

                    {/* Product Section */}
                    <View style={styles.product}>
                        <Image src="product-image-placeholder.jpg" style={styles.productImage} />
                        <View style={styles.details}>
                            <View style={styles.table}>
                                <View style={styles.tableRow}>
                                    <Text style={[styles.tableCell, styles.tableHeader]}>Gold</Text>
                                    <Text style={styles.tableCell}>14k</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={[styles.tableCell, styles.tableHeader]}>Main Diamond</Text>
                                    <Text style={styles.tableCell}>200gm</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={[styles.tableCell, styles.tableHeader]}>Side Stone</Text>
                                    <Text style={styles.tableCell}>100gm</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={[styles.tableCell, styles.tableHeader]}>Quality</Text>
                                    <Text style={styles.tableCell}>High</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={[styles.tableCell, styles.tableHeader]}>Size</Text>
                                    <Text style={styles.tableCell}>20</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={[styles.tableCell, styles.tableHeader]}>Order Value</Text>
                                    <Text style={styles.tableCell}>₹12,000/-</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={[styles.tableCell, styles.tableHeader]}>Color</Text>
                                    <Text style={styles.tableCell}>Yellow</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={[styles.tableCell, styles.tableHeader]}>Remark</Text>
                                    <Text style={styles.tableCell}>Special Edition</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={[styles.tableCell, styles.tableHeader]}>Product ID</Text>
                                    <Text style={styles.tableCell}>OD111</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={[styles.tableCell, styles.tableHeader]}>Total Cost</Text>
                                    <Text style={[styles.tableCell, { color: 'red' }]}>₹12,350/-</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Footer Section */}
                    <View style={styles.footer}>
                        <Text>
                            Total Products Cost: <strong style={{ fontSize: 18, color: '#333' }}>₹37,050/-</strong>
                        </Text>
                        <Text>Email: treasurelab@gmail.com | Phone: +91 75787 75177</Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default MyPDF;
