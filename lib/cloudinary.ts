export const uploadToCloudinary = async (file: File, resourceType: "image" | "video" = "image") => {
  const formData = new FormData()
  formData.append("file", file)
  formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "your_unsigned_upload_preset") // Replace with your actual unsigned upload preset
  formData.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "your_cloud_name") // Replace with your actual Cloudinary cloud name

  const endpoint = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "your_cloud_name"}/${resourceType}/upload`

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: formData,
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Cloudinary upload error response:", errorData)
      throw new Error(`Upload failed: ${errorData.error?.message || response.statusText}`)
    }

    const data = await response.json()
    return {
      url: data.secure_url,
      publicId: data.public_id,
      width: data.width,
      height: data.height,
      format: data.format,
    }
  } catch (error) {
    console.error("Cloudinary upload error:", error)
    throw error
  }
}
