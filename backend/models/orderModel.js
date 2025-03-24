import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: "Placed"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const orderModel = mongoose.model("orders", orderSchema);
export default orderModel;