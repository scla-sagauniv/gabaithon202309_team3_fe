import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";

// ユーザー委任に変更してSASトークンを取得する方法でも良き
const sasToken = import.meta.env.VITE_APP_STORAGE_SAS_TOKEN;
const containerName = `idea-img`;
const storageAccountName = import.meta.env.VITE_APP_STORAGE_ACCOUNT_NAME;

const uploadUrl = `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`;

const blobService = new BlobServiceClient(uploadUrl);

// コンテナ取得
const containerClient: ContainerClient =
  blobService.getContainerClient(containerName);


// 機能フラグ 設定されていない場合は、アプリにストレージ機能を無効にする
export const isStorageConfigured = () => {
  return !storageAccountName || !sasToken ? false : true;
};

// 表示するコンテナのblobのリストを返す。
export const getBlobsInContainer = async () => {
  const returnedBlobUrls = [];

  // コンテナ内のblobのリストを取得する
  for await (const blob of containerClient.listBlobsFlat()) {
    console.log(`${blob.name}`);

    const blobItem = {
      url: `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}?${sasToken}`,
      name: blob.name
    }

    // イメージが公開されている場合は、URLを構築するだけ
    returnedBlobUrls.push(blobItem);
  }

  return returnedBlobUrls;
};

const createBlobInContainer = async (file: File) => {
  // blobコンテナ用のblobClientを作成
  // パラメータとして、blobclientの名前を指定
  const blobClient = containerClient.getBlockBlobClient(file.name);
  // ファイルアップロードコントロールでブラウザーから決定されたtypeを設定
  const options = { blobHTTPHeaders: { blobContentType: file.type } };
  // ファイルをアップロードする
  await blobClient.uploadData(file, options);
  const url = `https://${storageAccountName}.blob.core.windows.net/${containerName}/${file.name}`;
  return url;
};

export const uploadFileToBlob = async (file: File | null): Promise<void> => {
  if (!file) return;
  // ファイルをアップロードする
  const url = await createBlobInContainer(file);
  return url;
};