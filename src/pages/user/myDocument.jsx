import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, pdf } from '@react-pdf/renderer';

// Styles for the document
const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica', // Default system font
        width: '210mm', // A4 width (210mm)
        height: '297mm', // A4 height (297mm)
        padding: '10px',
    },
    container: {
        position: 'relative',
        width: '100%',
    },
    header: {
        textAlign: 'center',
    },
    headerImage: {
        maxWidth: '150px',
        maxHeight: '50px',
    },
    product: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    productImage: {
        width: '40%', // Smaller image size to fit on A4 page
        height: '275px',
        border: '1px solid #ccc',
    },
    details: {
        marginLeft: '10mm', // Adjusted to avoid overflow
        flex: 1,
        width: '60%',
    },
    table: {
        borderCollapse: 'collapse',
    },
    tableRow: {
        width: "100%",
        border: '1px solid #000',
        display: "flex",
        flexDirection: 'row',
        borderCollapse: 'collapse',
    },
    tableHeader: {
        width: '30%',
        fontSize: '20px',
        textAlign: 'left',
        border: '1px solid #000',
    },
    tableCell: {
        width: '70%',
        fontSize: '20px',
        textAlign: 'left',
        border: '1px solid #000',
    },
    footer: {
        display: 'flex',
        position: 'fixed',
        bottom: '0',
        justifyContent: 'space-between',
        marginTop: '20px',
        paddingTop: '10px',
    },
    footerText: {
        margin: 0,
    },
    totalCost: {
        fontSize: '16px',
        color: '#333',
    },
    redText: {
        color: 'red',
    },
});

// Document Component
const MyDocument = () => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header Section */}
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image src="logo-placeholder.png" style={styles.headerImage} />
                        <Text style={{ fontSize: '24px', fontWeight: 'bold' }}>Lab Treasure</Text>
                    </View>

                    {/* Product Section */}
                    <View style={styles.product}>
                        <Image src="product-image-placeholder.jpg" style={styles.productImage} />
                        <View style={styles.details}>
                            <View style={styles.table}>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableHeader}>Gold</Text>
                                    <Text style={styles.tableCell}>14k</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableHeader}>Main Diamond</Text>
                                    <Text style={styles.tableCell}>200gm</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableHeader}>Side Stone</Text>
                                    <Text style={styles.tableCell}>100gm</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableHeader}>Quality</Text>
                                    <Text style={styles.tableCell}>High</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableHeader}>Size</Text>
                                    <Text style={styles.tableCell}>20</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableHeader}>Order Value</Text>
                                    <Text style={styles.tableCell}>₹12,000/-</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableHeader}>Color</Text>
                                    <Text style={styles.tableCell}>Yellow</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableHeader}>Remark</Text>
                                    <Text style={styles.tableCell}>Special Edition</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableHeader}>Product ID</Text>
                                    <Text style={styles.tableCell}>OD111</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableHeader}>Total Cost</Text>
                                    <Text style={[styles.tableCell, styles.redText]}>₹12,350/-</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Footer Section */}
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>
                            Total Products Cost: <Text style={styles.totalCost}>₹37,050/-</Text>
                        </Text>
                        <Text style={styles.footerText}>Email: treasurelab@gmail.com | Phone: +91 75787 75177</Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};



export default MyDocument;
