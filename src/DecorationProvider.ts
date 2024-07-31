import { FileDecoration, FileDecorationProvider, Disposable, Uri, ThemeColor } from "vscode";

export class SectionDecorationProvider implements FileDecorationProvider {
	public provideFileDecoration(uri: Uri): FileDecoration | undefined {
        if (uri.scheme === 'section') {
            return new FileDecoration('⚠', ('Oh No!'), new ThemeColor('inputValidation.warningBorder'));
        }
        return undefined;
    }

}