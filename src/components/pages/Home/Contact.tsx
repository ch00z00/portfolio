import { RotateButton } from "@/components/elements/Button";
import { CONTACT_ADDRESS, GITHUB_LINK } from "@/const";

export const Contact: React.FC = () => {
  return (
    <div className="relative flex items-center justify-between bg-yellow-100 px-20">
      <RotateButton
        bef_txt="X(Twitter)"
        aft_txt="Open in a new tab"
        className="text-black-100"
      />
      <RotateButton
        bef_txt="GitHub"
        aft_txt="Open in a new tab"
        className="text-black-100"
      />
      <RotateButton
        bef_txt={CONTACT_ADDRESS}
        aft_txt="Copy to clipboard"
        result_txt="Copied!"
        className="text-black-100"
      />
    </div>
  );
};
