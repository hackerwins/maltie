// Project is the unit of work for labelling dataset and training models.
export type Project = {
  id: number;
  name: string;
}

// Image is a single image in a dataset.
export type Image = {
  src: string;
  createdAt: number;
}

// Label is the unit of data that has images and its name.
export type Label = {
  name: string;
  images: Array<Image>;
};

// Dataset is a collection of labels
export type Dataset = {
  projectID: number;
  labels: Array<Label>;
};

export type ImagePrediction = {
  scores: Array<number>;
}

export type LabelPrediction = {
  label: string;
  images: Array<ImagePrediction>;
};

export type Prediction = {
  projectID: number;
  labels: Array<LabelPrediction>;
}

// filterLabels returns a label array without unlabeled label.
export function filterLabels(labels: Array<Label>): Array<Label> {
  return labels.filter(label => label.name !== 'Unlabeled');
}

// TrainingLog is the log of training process.
export type TrainingLog = {
  epoch: number;
  loss: number;
  accuracy: number;
}

// Model is the metadata of a trained model.
export type Model = {
  projectID: number;
  labelNames: Array<string>;
  history: Array<TrainingLog>;
  indexedDBKey: string;
  prediction: Prediction;
}

