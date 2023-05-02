import { DeleteRounded } from "@mui/icons-material";
import { ListItemIcon, ListItemText } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDeletePodMutation } from "store/api.slice";

export default function ActionMenu({
  anchorEl,
  handleClose,
  open,
  target,
}: {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
  target: {
    name: string;
    namespace: string;
  };
}) {
  const [deletePod] = useDeletePodMutation();

  const handleDeletePod = async () => {
    try {
      await deletePod({
        name: target?.name,
        namespace: target?.namespace,
      }).unwrap();
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleDeletePod}>
        <ListItemIcon>
          <DeleteRounded fontSize="small" />
        </ListItemIcon>
        <ListItemText>Delete</ListItemText>
      </MenuItem>
    </Menu>
  );
}
