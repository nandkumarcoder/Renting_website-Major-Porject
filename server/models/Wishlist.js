const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * @typedef {Object} IWishlist
 * @property {mongoose.Types.ObjectId} user
 * @property {mongoose.Types.ObjectId[]} products
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

const WishlistSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide a user"],
      unique: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Create indexes
WishlistSchema.index({ user: 1 });

module.exports = mongoose.models.Wishlist || mongoose.model("Wishlist", WishlistSchema);
