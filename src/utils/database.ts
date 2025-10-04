// mongoose　というライブラリをインポートする。
// mongooseはmongoDBを操作するためのnpmモジュールである。
// MongoDBはno-SQLであり、データはテーブルではなくコレクションの形で保存される。
// フィールド（列に対応）、ドキュメント（行に対応）
// 使うときにはnpm i mongooseを実行しなければならない。
import mongoose from "mongoose";

// connectDb 関数は、DBを用いるため、非同期関数として宣言する。
export const connectDb = async () => {
  try {
    // 非同期関数の中で、実行するものはawaitをもちいて、mongooseのconnectメソッドMongooseの提供するメソッドで、MongoDBへの接続を試みます。
    await mongoose.connect(process.env.DB_URI || '')
  } catch (error) {
    // errorがはかれたら接続に失敗と表示されて、throw new error でエラーを吐く
    console.log('connection failed');
    throw new Error();
  }
}