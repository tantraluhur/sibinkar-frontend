import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DownloadIcon, Plus } from "lucide-react";
import CreateOrganizationDialog from "../Dialog/CreateOrganizationDialog";
import { Organization } from "../../types";

interface Props {
  data: Organization[];
  selected?: string;
  onFilterChange: (value: string) => void;
}

const Toolbar = ({data, selected, onFilterChange} : Props) => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col">
        <h1 className="text-xl text-indigo-900 font-bold pb-2">
          Pilih Organisasi
        </h1>
        <Select onValueChange={onFilterChange} value={selected}>
          <SelectTrigger>
            <SelectValue placeholder="Pilih Organisasi" />
          </SelectTrigger>

          <SelectContent>
            {data.map((org) => {
                return (
                  <SelectItem value={org.id.toString()}>{org.nama}</SelectItem>
                )
              })}
          </SelectContent>
        </Select>
      </div>

      <Dialog>
        <div>
          <DialogTrigger asChild>
            <Button variant="outline" className="mr-6">
              <Plus className="mr-2" /> Tambah Organisasi
            </Button>
          </DialogTrigger>

          <Button className="px-8">
            <DownloadIcon className="mr-2" /> Unduh
          </Button>
        </div>
        <CreateOrganizationDialog />
      </Dialog>
    </div>
  );
};

export default Toolbar;
