import Swal from "sweetalert2";

export const confirmDelete = async () => {
    return await Swal.fire({
        title: "Delete Post",
        text: "Are you sure you want to delete this post? This action cannot be undone.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#dc2626",
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
        background: "#1f2937",
        color: "#f3f4f6",
        iconColor: "#fbbf24",
        customClass: {
            popup: "rounded-xl border border-gray-700",
            title: "text-xl font-bold",
            htmlContainer: "text-gray-300",
            confirmButton: "rounded-lg",
            cancelButton: "rounded-lg",
        },
    });
};

export const showDeletedAlert = () => {
    Swal.fire({
        title: "Post Deleted",
        text: "The post has been successfully deleted.",
        icon: "success",
        confirmButtonColor: "#1d4ed8",
        background: "#1f2937",
        color: "#f3f4f6",
        iconColor: "#22c55e",
        customClass: {
            popup: "rounded-xl border border-gray-700",
            title: "text-xl font-bold",
            htmlContainer: "text-gray-300",
            confirmButton: "rounded-lg",
        },
    });
};
